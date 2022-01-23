export type easeTweenFunc = (k: number) => number

export type placeholderFunc = () => void

export type updateTweenFunc = (
  timeElapsedEase: number,
  timeElapsed: number,
) => void

export type easeType =
  | 'linear'
  | 'quad_In'
  | 'quad_Out'
  | 'quad_InOut'
  | 'cubic_In'
  | 'cubic_Out'
  | 'cubic_InOut'
  | 'quart_In'
  | 'quart_Out'
  | 'quart_InOut'
  | 'quint_In'
  | 'quint_Out'
  | 'quint_InOut'
  | 'sine_In'
  | 'sine_Out'
  | 'sine_InOut'
  | 'exp_In'
  | 'exp_Out'
  | 'exp_InOut'
  | 'circ_In'
  | 'circ_Out'
  | 'circ_InOut'
  | 'elastic_In'
  | 'elastic_Out'
  | 'elastic_InOut'
  | 'back_In'
  | 'back_Out'
  | 'back_InOut'
  | 'bounce_In'
  | 'bounce_Out'
  | 'bounce_InOut'

export interface TweenProps {
  /**
   * @default 1000
   */
  durationMS: number
  /**
   * @default 0
   */
  delayMS?: number
  /**
   * @default 'linear'
   */
  easeName?: easeType
  onUpdate: updateTweenFunc
  onComplete?: placeholderFunc
}
