import { useState, useCallback } from 'react'

import CodeMirror, {ReactCodeMirrorProps} from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'


interface ReactCodeMirrorJsonProps extends ReactCodeMirrorProps {
  valueJson: any,
  onChangeJson: any
}


export default function CodeMirrorJson(props: ReactCodeMirrorJsonProps) {
  const { onChangeJson, valueJson, ..._props } = props
  const onChange = useCallback((value: string, viewUpdate: any) => {
    try {
      onChangeJson(JSON.parse(value))
    } catch (e) {}
  }, [onChangeJson])

  return (
    <CodeMirror
      {...{..._props,
           value: JSON.stringify(props.valueJson, null, 1),
           onChange,
           extensions: [json()]
          }}
    />
  )
}
