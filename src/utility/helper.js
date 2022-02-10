/**
 * Add a unique test id for iOS and Android
 *
 * @param {string} id
 * @param {boolean} disableAccessible All touchable elements are accessible, meaning that it
 * groups its children into a single selectable component, sometimes this is not needed for testing
 *
 * @return {object}
 */

 export function testProperties(id, disableAccessible = false) {
    const disableAccessibility = disableAccessible ? { accessible: false } : {accessible: true};
  
    return { ...disableAccessibility, accessibilityLabel: id, testID: id };
  }
  