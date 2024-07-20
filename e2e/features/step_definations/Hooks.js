/* eslint-disable no-undef */
import {AfterAll, Before, BeforeAll} from '@cucumber/cucumber'
import {cleanup, init} from 'detox/internals'

BeforeAll({timeout: 60 * 1000}, async () => {
  await init()
})

Before(async () => {
  // await device.launchApp({newInstance: true})
})

AfterAll(async () => {
  await cleanup()
})
