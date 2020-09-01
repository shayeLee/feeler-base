function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args
  }

  if (funcs.length === 1) {
    return funcs[0].bind(this);
  }
  
  return (...args) => {
    return funcs.reduce((a, b) => {
      console.log('b.apply(this, args): ', b.apply(this, args));
      a.apply(this, b.apply(this, args))
    })
  }
}

export {
  compose
}