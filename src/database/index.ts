import { inject } from 'vue'
import type { Plugin } from 'vue'
import { addRxPlugin, createRxDatabase } from 'rxdb'
import type { RxDocument, RxCollection, RxDatabase } from 'rxdb'
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode'
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv'

import type { Enquiry } from '@/types'
import { enquirySchema } from '@/types'

type RxFieldReporterDatabase = RxDatabase<{
  enquiries: RxCollection<RxDocument<Enquiry>>
}>

// TODO: wrap in environment check
addRxPlugin(RxDBDevModePlugin)

const PLUGIN_KEY = Symbol('database')

export function useDatabase(): RxFieldReporterDatabase {
  return inject(PLUGIN_KEY) as RxFieldReporterDatabase
}

export async function createDatabase(): Promise<Plugin> {
  const db = await createRxDatabase({
    name: 'field-reporter',
    storage: wrappedValidateAjvStorage({ storage: getRxStorageDexie() })
  })

  await db.addCollections({
    enquiries: {
      schema: enquirySchema
    }
  })

  return {
    install(app: any) {
      app.provide(PLUGIN_KEY, db)
    }
  }
}
