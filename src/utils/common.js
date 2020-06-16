export const hasOnlyChild = (children = [], item) => {
  let _aChildren = children.filter(item => {
    return item.hidden ? false : true;
  });

  // 只有一个子，自身没有meta属性，说明是一级
  if (_aChildren.length === 1 && !item.meta) {
    return _aChildren[0];
  }

  // 没有子，说明是一级
  if (!item.children) {
    return item;
  }

  return false;
};
