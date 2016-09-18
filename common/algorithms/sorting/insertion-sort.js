'use strict';

/**
 * Sort an array using insertion sort, building a sorted array one at a time by
 * comparing each new element to already sorted elements and inserting new
 * element into correct location (like sorting a hand of playing cards)
 * See https://en.wikipedia.org/wiki/Insertion_sort
 * @param {Array} items Items to be sorted
 * @returns {Array} items sorted using insertion sort algorithm
 */
exports.insertionSort = items => {
  var itemsLength = items.length;
  for (let unsortedIndex = 1; unsortedIndex < itemsLength; unsortedIndex++) {
    // If value in sorted section is greater than current item, create space
    // to insert the current value by shifting all items in sorted section by one.
    let currentItemValue = items[unsortedIndex];
    let sortedIndex;
    for (sortedIndex = unsortedIndex - 1; sortedIndex >= 0 && items[sortedIndex] > currentItemValue; sortedIndex--) {
      items[sortedIndex + 1] = items[sortedIndex];
    }

    // insert the current value into at the correct position in the sorted section
    items[sortedIndex + 1] = currentItemValue;
  }

  return items;
};
