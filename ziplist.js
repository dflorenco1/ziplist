const testList = ['a', 'b', 'c'];
const testList2 = [ 1, 2 ,3 ];

function zipList(list1, list2) {
  const retList = [];
  for (i = 0; i < list1.length; i++) {
    retList.push(list1[i], list2[i]);
  }
  return retList;
}

console.loh(zipList(testList, testList2));

function zipListSimple(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListSimple(testList, testList2));
