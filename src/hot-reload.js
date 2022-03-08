function resolve (id, parentUrl = this.url) {
  return importShim.resolve(id, `${parentUrl}`);
}

export function throwUnresolved (id, parentUrl) {
  throw Error(`Unable to resolve specifier '${id}'${fromParent(parentUrl)}`);
}

class HotAPI {
  constructor (url) {
    this.url = url;
    this.data = {};
  }

  accept (deps, cb) {
    if (typeof deps === 'function') {
      cb = deps;
      deps = [this.url];
    }
    cb(...mods)
  }

  dispose (cb) {
    cb(data);
  }

  decline () {
    // On invalidate:
    // window.location.href = window.location.href;
  }

  invalidate () {
    // invalidate this module
  }
}

self.esmsOptions = {
  resolve (id, parent, defaultResolve) {
    // add version
  },
  meta (metaObj, url) {
    metaObj.hot = new HotAPI(url);
  }
};
