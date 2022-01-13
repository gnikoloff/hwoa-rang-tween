import {
  easeTweenFunc,
  easeType,
  placeholderFunc,
  TweenProps,
  updateTweenFunc,
} from './interfaces'

import { Easing } from './easings'

export class Tween {
  startMS = 0
  isActive = false

  rafID!: number
  durationMS: number
  easeFunc: easeTweenFunc
  onUpdate: updateTweenFunc
  onComplete: placeholderFunc

  constructor({
    durationMS,
    easeName,
    onUpdate,
    onComplete = () => {},
  }: TweenProps) {
    this.durationMS = durationMS
    this.easeFunc = Easing[easeName]
    this.onUpdate = onUpdate
    this.onComplete = onComplete
  }

  start(): this {
    this.startMS = performance.now()
    this.isActive = true
    this.rafID = requestAnimationFrame(this.update)
    return this
  }

  stop() {
    cancelAnimationFrame(this.rafID)
    this.rafID = -1
  }

  setEase(easeName: easeType): this {
    this.easeFunc = Easing[easeName]
    return this
  }

  update = () => {
    this.rafID = requestAnimationFrame(this.update)

    let msNorm = (performance.now() - this.startMS) / this.durationMS
    if (msNorm < 0) {
      msNorm = 0
    } else if (msNorm > 1) {
      msNorm = 1
    }

    const ease = this.easeFunc(msNorm)
    this.onUpdate(ease, msNorm)

    if (msNorm >= 1) {
      this.onComplete()
      this.stop()
    }
  }
}
