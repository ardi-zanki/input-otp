export interface SlotProps {
  isActive: boolean
  char: string | null
  hasFakeCaret: boolean
}
export interface RenderProps {
  slots: SlotProps[]
  isFocused: boolean
  isHovering: boolean
}
type OverrideProps<T, R> = Omit<T, keyof R> & R
type OTPInputBaseProps = OverrideProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    value?: string
    onChange?: (newValue: string) => unknown

    maxLength: number

    textAlign?: 'left' | 'center' | 'right'

    onComplete?: (...args: any[]) => unknown
    pushPasswordManagerStrategy?: 'increase-width' | 'none'

    containerClassName?: string

    noScriptCSSFallback?: string | null
  }
>
type InputOTPRenderFn = (props: RenderProps) => React.ReactNode
export type OTPInputProps = OTPInputBaseProps &
  (
    | {
        render: InputOTPRenderFn
        children?: never
      }
    | {
        render?: never
        children: React.ReactNode
      }
  )
export type OTPInputMetadata = {
  prev: [number | null, number | null, 'none' | 'forward' | 'backward']
  willSyntethicBlur: boolean
}
