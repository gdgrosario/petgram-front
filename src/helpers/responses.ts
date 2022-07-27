const excludeDataWithSameId = <DType>(newData: DType[], prevData: DType[]) => {
  var array = [];
  for (var i = 0; i < prevData.length; i++) {
    var same = false;
    for (var j = 0; j < newData.length && !same; j++) {
      if (prevData[i]["id"] === newData[j]["id"]) same = true;
    }
    if (!same) array.push(prevData[i]);
  }
  return array.concat(newData);
};

export { excludeDataWithSameId };
