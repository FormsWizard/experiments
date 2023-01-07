import { useState, useCallback } from 'react'

import styles from '../styles/Home.module.css'

import { Grid, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

import CodeMirrorJson from '../components/CodeMirrorJson'

import { JsonForms } from '@jsonforms/react'
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers'

import examples from '../examples'

export default function Page() {

  const [exampleName, setExampleName] = useState(Object.keys(examples)[2])
  const [example, setExample] = useState((examples as any)[exampleName])

  const [schema, setSchema] = useState(example.schema)
  const [uischema, setUISchema] = useState(example.uischema)
  const [data, setData] = useState(example.data)

  const onChangeExample = useCallback((e: SelectChangeEvent) => {
    const newExampleName = e.target.value
    const newExample = (examples as any)[newExampleName]
    setExampleName(newExampleName)
    setExample(newExample)
    setSchema(newExample.schema)
    setUISchema(newExample.uischema)
    setData(newExample.data)
  }, [])
  const onChangeData = useCallback(({data, errors}: any) => setData(data), [])

  return (
    <main className={styles.main}>
      <Grid container>

        <Grid item md={12}>
          <FormControl fullWidth>
            <InputLabel id="example-name-label">Example</InputLabel>
            <Select
              labelId="example-name-label"
              id="example-name"
              value={exampleName}
              label="Example"
              onChange={onChangeExample}
            >
              { Object.keys(examples).map( x =>
                  <MenuItem value={x} key={x}>{x}</MenuItem> ) }
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <h3>Schema:</h3>
          <CodeMirrorJson
            valueJson={schema}
            onChangeJson={setSchema}
          />
        </Grid>

        <Grid item md={6}>
          <h3>UISchema:</h3>
          <CodeMirrorJson
            valueJson={uischema}
            onChangeJson={setUISchema}
          />
        </Grid>
    
        <Grid item md={12}>
          <h3>Form:</h3>
	  { /** TODO: We should add an error boundary to handle invalid schemata or validate them **/
	    schema &&
	    <JsonForms
              schema={schema}
              uischema={uischema||undefined}
              data={data}
              renderers={materialRenderers}
              cells={materialCells}
              onChange={onChangeData}
            />
	  }
        </Grid>
    
        <Grid item md={12}>
          <h3>Data:</h3>
          <CodeMirrorJson
            valueJson={data}
	    /** TODO: We should ensure that no update loops between JsonForm and CodeMirrorJson can occur **/
            onChangeJson={setData}
          />
        </Grid>

      </Grid>
    </main>
  )
}
