import * as officialExamples from '@jsonforms/examples'

import ll_crew_ship_schema from './ll_crew_ship/schema.json'
import ll_crew_ship_data from './ll_crew_ship/data.json'
import ll_crew_shipyard_schema from './ll_crew_shipyard/schema.json'
import ll_crew_shipyard_data from './ll_crew_shipyard/data.json'
import gbr_mitglieder_schema from './gbr_mitglieder/schema.json'
import gbr_mitglieder_uischema from './gbr_mitglieder/uischema.json'
import gbr_mitglieder_data from './gbr_mitglieder/data.json'

const examples = { ll_crew_ship: {
                     // https://mission-lifeline.de/mitmachen/schiffs-crew/
                     "schema": ll_crew_ship_schema,
                     "data": ll_crew_ship_data
                   },
                   ll_crew_shipyard: {
                     // https://mission-lifeline.de/wp-content/uploads/2022/01/Werft_FragebogenJan2022.pdf
                     "schema": ll_crew_shipyard_schema,
                     "data": ll_crew_shipyard_data
                   },
		   gbr_mitglieder: {
                     "schema": gbr_mitglieder_schema,
                     "data": gbr_mitglieder_data,
                     "uischema": gbr_mitglieder_uischema
                   },
                   ...officialExamples }

export default examples
