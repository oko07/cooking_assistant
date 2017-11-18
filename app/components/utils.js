import Bb from 'backbone'

let buildCollection = models => {
  return new Bb.Collection(models)
}

export {buildCollection}
