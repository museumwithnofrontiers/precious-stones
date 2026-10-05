import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'preciousStones',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Precious Stones',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '7fd24a74-b039-5ba4-b6a9-6fe4522c585f',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '6157df5e-6cc0-55c3-aebb-5ece5ba7125c',
    dynasty: {
      item: '32fdd8a2-bebf-5ad2-bcf2-45ef21b39556',
      name: 'Abbasids',
    },
    timeline: {
      code: 'at',
      id: 'aut',
      country: 'Austria',
    },
    partner: {
      id: 'af01a84d-b174-5718-b9a7-b741c8957086',
      name: 'The British Museum',
      city: 'London',
      country: 'United Kingdom',
      objects: 2,
    },
  },
})
