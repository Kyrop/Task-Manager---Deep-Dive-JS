// Validation functions for the Task Management System
// Your job: Implement these validation functions according to the requirements

/**
 * Validates user data
 * @param {Object} userData - User data to validate
 * @returns {Object} - { valid: boolean, errors?: string[] } ✅
 *
 * Requirements:
 * - name: Required, non-empty string, 2-100 characters ✅
 * - email: Required, valid email format ✅
 * - role: Optional, must be one of: developer, designer, manager, admin ✅
 * - active: Optional, must be boolean ✅
 */

// Call of data from data.js and set in variables/arrays
let { users, projects, tasks } = require("./data");

function validateUser(userData) {
  // TODO: Implement validation
  // Hint: Use an array to collect errors
  // Hint: Check each field and add error messages
  // Hint: Return { valid: true } or { valid: false, errors: [...] }
  let errors = [];
  // Name check
  if(!userData.name || userData.name.trim() === ""){
    errors.push("Name is required!")
  };
  // Email check
  if(!userData.email || userData.email.trim() === ""){
    if(!userData.email.includes("@") && !userData.email.includes(".")){
      errors.push("Email is required!")
    }
  };
  // Role check
  const companyRoles = ["developer", "manager", "designer"];
  if(!userData.role || !companyRoles.includes(userData.role)){
    errors.push("Company's roles are: developer, manager, designer")
  }
  // Active status check
  if(typeof userData.active !== "boolean"){
    errors.push("For 'active' status are allowed only true or false!")
  }
  // Validation
  if(errors.length === 0){
    return {valid: true};
  } else{
    return {valid: false, errors: errors}; 
  }
}

// console.log(validateUser(users[1])); // An example to check if it's working


// /**
//  * Validates task data
//  * @param {Object} taskData - Task data to validate
//  * @returns {Object} - { valid: boolean, errors?: string[] }
//  *
//  * Requirements:
//  * - title: Required, non-empty string, 5-200 characters ✅
//  * - description: Optional, max 1000 characters ✅
//  * - projectId: Required, non-empty string ✅
//  * - assigneeId: Optional, non-empty string if provided ✅
//  * - status: Must be one of: todo, in-progress, done, blocked ✅
//  * - priority: Must be one of: low, medium, high, urgent ✅
//  * - tags: Optional, must be array of strings if provided ✅
//  * - dueDate: Optional, must be valid date string, not in the past ✅
//  * - estimatedHours: Optional, must be positive number if provided ✅
//  */
function validateTask(taskData) {
  //   // TODO: Implement validation
  //   // Hint: Use guard clauses for required fields
  //   // Hint: Use array.includes() to check valid values
  //   // Hint: For date validation, create a Date object and check if it's valid

  let errors = [];

  // Title check
  let titleRequirements = taskData.title.trim() === "" && taskData.title.length < 5 && taskData.title.length > 200;
  if(titleRequirements) throw new Error(errors.push("Title is required"));
  
  // Description check
  if(taskData.description.length > 1000){
    errors.push("Max 1000 characters")
  }
  
  // projectId check
  if(taskData.projectId.trim() === "") throw new Error(errors.push("Project ID is required"));

  // assigneeId check
  if(taskData.assigneeId.trim() === ""){
    errors.push("Empty user's ID")
  }

  // Status check
  const status = ["todo", "in-progress", "done", "blocked"];
  if(!taskData.status || !status.includes(taskData.status)){
    errors.push("Status must be: todo, in-progress, done, blocked")
  }
  
  // Priority check
  const priority = ["low", "medium", "high", "urgent"];
  if(!taskData.priority || !priority.includes(taskData.priority)){
    errors.push("Status must be: low, medium, high, urgent")
  }

  // Tags check
  if(!Array.isArray(taskData.tags)){
    errors.push("That's not an array")
  }

  // Date check
  let dateValidation = new Date(taskData.dueDate);
  let nowDate = new Date();
  if(!dateValidation && dateValidation < nowDate){
    errors.push("Invalid date")
  }

  // Estimated Hours check estimatedHours
  if(taskData.estimatedHours<0){
    errors.push("Invalid estimation")
  }

  // Validation
  if(errors.length === 0){
    return {valid: true};
  } else{
    return {valid: false, errors: errors}; 
  }
}
// console.log(validateTask(tasks[2])); // An example to check if it's working

// /**
//  * Validates project data
//  * @param {Object} projectData - Project data to validate
//  * @returns {Object} - { valid: boolean, errors?: string[] }
//  *
//  * Requirements:
//  * - name: Required, non-empty string, 3-100 characters ✅
//  * - description: Optional, max 500 characters ✅
//  * - ownerId: Required, non-empty string ✅
//  * - teamMembers: Optional, must be array of strings if provided ✅
//  * - status: Must be one of: active, on-hold, completed ✅
//  * - deadline: Optional, must be valid date string, not in the past ✅
//  */
function validateProject(projectData) {
//   // TODO: Implement validation

let errors = [];

// Name check
  let nameRequirements = projectData.title.trim() === "" && projectData.title.length < 3 && projectData.title.length > 100;
  if(nameRequirements) throw new Error(errors.push("Name is required"));

  // Description check
  if(projectData.description.length > 500){
    errors.push("Max 500 characters")
  }

  // ownerId check
  if(projectData.ownerId.trim() === "") throw new Error(errors.push("Owner's ID is required"));

  // teamMembers check
  if(!Array.isArray(projectData.teamMembers)){
    errors.push("That's not an array")
  }

  // Status check
  const status = ["active", "on-hold", "completed"];
  if(!projectData.status || !status.includes(projectData.status)){
    errors.push("Status must be: active, on-hold, completed")
  }

  // Date check
  let dateValidation = new Date(projectData.dueDate);
  let nowDate = new Date();
  if(!dateValidation && dateValidation < nowDate){
    errors.push("Invalid date")
  }

  // Validation
  if(errors.length === 0){
    return {valid: true};
  } else{
    return {valid: false, errors: errors};
  }
}

// /**
//  * Validates email format
//  * @param {string} email - Email to validate
//  * @returns {boolean} - true if valid email format
//  *
//  * Hint: Use a simple regex pattern or check for @ and .
//  */
function isValidEmail(email) {
//   // TODO: Implement email validation
//   // Simple approach: check for @ and . in correct positions
//   // Advanced: use regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Validation - Simple way
  if(email.email.includes("@") && email.email.includes(".")){
      return {valid: true};
    }

  // Validation - Advanced way (I guess)
  const correctChars = email.email.search(/@/)!==0 && email.email.search(/./)!==0;
  const correctPosition = email.email.search(/@/) < email.email.search(/./);
  if(correctChars && correctPosition){
    return {valid: true};
  }
}

// /**
//  * Validates date string
//  * @param {string} dateString - Date string to validate
//  * @returns {boolean} - true if valid date
//  *
//  * Hint: Try creating a Date object and check if it's valid
//  */
function isValidDate(dateString) {
  // TODO: Implement date validation
  // Hint: new Date(dateString) and check if it's not "Invalid Date"
  let date = new Date(dateString);
  return !isNaN(date);
}

// /**
//  * Checks if a date is in the past
//  * @param {string} dateString - Date string to check
//  * @returns {boolean} - true if date is in the past
//  */
function isDateInPast(dateString) {
  // TODO: Implement past date check
  // Hint: Compare with new Date()
  let dateValidation = new Date(projectData.dueDate);
  let nowDate = new Date();
  return dateValidation < nowDate;
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validateUser,
    validateTask,
    validateProject,
    isValidEmail,
    isValidDate,
    isDateInPast
  };
}
