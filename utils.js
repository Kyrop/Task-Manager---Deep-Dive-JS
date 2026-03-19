// Utility functions for the Task Management System
// Your job: Implement these utility functions

/**
 * Generates a unique ID with a prefix
 * @param {string} prefix - Prefix for the ID (e.g., 'task', 'user', 'proj')
 * @returns {string} - Unique ID
 *
 * Example: generateId('task') => 'task-a7b3c9d2'
 *
 * Hint: Use Math.random().toString(36) to generate random string
 * Hint: You can also use Date.now() for uniqueness
 */
function generateId(prefix = 'id') {
  // TODO: Implement ID generation
  // Approach 1: prefix + timestamp + random string
  // Approach 2: prefix + random string
  let timestamp = Date.now();
  return prefix +"-"+ timestamp.toString()+Math.floor(10000*Math.random()).toString(36); // 2nd approach
}
// console.log(generateId('task')); // => task-177386535211175j


/**
 * Formats a date string
 * @param {string} dateString - ISO date string
 * @param {string} format - 'short' | 'long' | 'relative'
 * @returns {string} - Formatted date
 *
 * Examples:
 * formatDate('2024-01-15T10:00:00Z', 'short') => '01/15/2024'
 * formatDate('2024-01-15T10:00:00Z', 'long') => 'January 15, 2024'
 * formatDate('2024-01-15T10:00:00Z', 'relative') => '5 days ago'
 */
function formatDate(dateString, format = 'short') {
  // TODO: Implement date formatting
  // Hint: Create a Date object from the string
  // Hint: For 'short', use date.toLocaleDateString()
  // Hint: For 'long', use date.toLocaleDateString() with options
  // Hint: For 'relative', calculate difference from now
  let date = new Date(dateString);

  // Short version
  if (format === 'short'){
    return date.toLocaleDateString();
  }
  // Long version
  if (format === 'long'){
    return date.toLocaleDateString(undefined,{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  // Relative version
  if(format === 'relative'){
    let now = new Date();
    let then = Math.floor((now - date)/86400000);
    return `${then} days ago`;
  }
}

// console.log(formatDate('2026-03-12T10:00:00Z', 'short')); // => 3/12/2026
// console.log(formatDate('2026-03-12T10:00:00Z', 'long')); // => March 12, 2026
// console.log(formatDate('2026-03-12T10:00:00Z', 'relative')); // => 3 days ago


/**
 * Checks if a date is overdue
 * @param {string} dueDate - ISO date string
 * @returns {boolean} - true if overdue
 *
 * Hint: Compare the date with the current date
 */
function isOverdue(dueDate) {
  // TODO: Implement overdue check
  if (new Date(dueDate) > new Date()){
    return true;
  }
}
// console.log(isOverdue('2026-03-12T10:00:00Z')); // => undefined
// console.log(isOverdue('2026-04-12T10:00:00Z')); // => true


/**
 * Converts priority string to numeric value
 * @param {string} priority - 'low', 'medium', 'high', 'urgent'
 * @returns {number} - Numeric value (1-4)
 *
 * Use this for sorting by priority
*/
function priorityValue(priority) {
  // TODO: Implement priority mapping
  // low => 1, medium => 2, high => 3, urgent => 4
  
  if(priority === "low") return 1;
  if(priority === "medium") return 2;
  if(priority === "high") return 3;
  if(priority === "urgent") return 4;

  return 0;
  
}
// console.log(priorityValue("medium")); // => 2
// console.log(priorityValue("very low")); // => 0

/**
 * Creates a deep clone of an object
 * @param {Object} obj - Object to clone
 * @returns {Object} - Deep copy
 *
 * Hint: Use JSON.parse(JSON.stringify(obj)) for simple approach
 * Or implement recursive cloning for better handling
 */
function deepClone(obj) {
  // TODO: Implement deep clone
  // Simple approach: JSON.parse(JSON.stringify(obj))
  // Note: This won't work with functions, undefined, or dates
  if (typeof structuredClone === 'function'){
    return structuredClone(obj);
  }
  console.warn('structuredClone not available, using JSON fallback');
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Calculates the number of days between two dates
 * @param {string} date1 - ISO date string
 * @param {string} date2 - ISO date string
 * @returns {number} - Number of days (can be negative)
 */
function daysBetween(date1, date2) {
  // TODO: Implement days calculation
  // Hint: Convert to Date objects, subtract, divide by milliseconds in a day
  // One day = 24 * 60 * 60 * 1000 milliseconds
  const days = Math.floor((date1-date2)/(1000*60*60*24));
  if (days<0){
    return days;
  } else {
    return days + 1; // Without +1, it returns a different number, besides the sign (negative or positive)
  }
}

// // Test
// const date1 = new Date("2026-02-14");
// const date2 = new Date();
// console.log(daysBetween(date1,date2)); // => -32 for daysBetween(date1,date2), 32 for daysBetween(date2,date1)


/**
 * Calculates days until a date from now
 * @param {string} dateString - ISO date string
 * @returns {number} - Days until date (negative if past)
 */
function daysUntil(dateString) {
  // TODO: Implement days until
  // Hint: Use daysBetween with new Date() and the provided date
  const today = new Date();
  if (today<dateString){
    return Math.abs(daysBetween(today,dateString));
  }
  if (today>dateString){
    return daysBetween(dateString,today);
  }
}

// Test
// console.log(daysUntil(new Date("2026-05-23"))); // => 66
// console.log(daysUntil(new Date("2026-02-05"))); // => -40


/**
 * Converts a string to lowercase and trims whitespace
 * @param {string} str - String to normalize
 * @returns {string} - Normalized string
 */
function normalizeString(str) {
  // TODO: Implement string normalization
  const text = str.toLowerCase();
  return text.trim();
}

// console.log(normalizeString("HaKuNa MaTatA")); // => hakuna matata


/**
 * Checks if a value is an empty object {}
 * @param {*} obj - Value to check
 * @returns {boolean} - true if empty object
 */
function isEmptyObject(obj) {
  // TODO: Implement empty object check
  // Hint: Check if it's an object, then check Object.keys(obj).length
  if(typeof obj === 'object'){
    if (Object.keys(obj).length === 0){
      return true;
    } else{
      return false;
    }
  }
}

/**
 * Safely gets a nested property value
 * @param {Object} obj - Object to query
 * @param {string} path - Dot-notation path (e.g., 'user.address.city')
 * @param {*} defaultValue - Default value if path doesn't exist
 * @returns {*} - Value at path or default value
 *
 * Example: getNestedValue(user, 'profile.settings.theme', 'light')
 *
 * Hint: Split the path and reduce through the object
 * Or use optional chaining if you want to make it simple
 */
function getNestedValue(obj, path, defaultValue = undefined) {
  // TODO: Implement nested value getter
  // Hint: path.split('.').reduce((current, key) => current?.[key], obj)
  const value = path.split('.').reduce((current,key) => {
    return current?.[key];},obj);
  return res === undefined ? defaultValue : res;
}

/**
 * Groups an array of objects by a property
 * @param {Array} array - Array to group
 * @param {string} key - Property to group by
 * @returns {Object} - Grouped object
 *
 * Example: groupBy([{type: 'a'}, {type: 'b'}, {type: 'a'}], 'type')
 * Returns: { a: [{type: 'a'}, {type: 'a'}], b: [{type: 'b'}] }
 */
function groupBy(array, key) {
  // TODO: Implement groupBy
  // Hint: Use reduce to build the grouped object
  return array.reduce((acc, item) =>{
    const group = item[key];
    if (!acc[group]){
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  },{});
}


/**
 * Creates a debounced version of a function
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 *
 * Advanced: Only implement if you're comfortable with closures and setTimeout
 */
function debounce(func, delay) {
  // OPTIONAL: Implement debounce
  // This is more advanced - skip if you're not comfortable yet
  
  // Too advanced for me
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateId,
    formatDate,
    isOverdue,
    priorityValue,
    deepClone,
    daysBetween,
    daysUntil,
    normalizeString,
    isEmptyObject,
    getNestedValue,
    groupBy,
    debounce
  };
}