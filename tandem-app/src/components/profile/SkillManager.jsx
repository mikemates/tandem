import React, { useState, useEffect } from 'react';
import { getUserSkills, addUserSkill, updateUserSkill, removeUserSkill } from '../../services/profileService';
import { skillCategories } from '../../services/mockData';

/**
 * Component for managing user skills
 */
const SkillManager = ({ userId }) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // New skill form state
  const [newSkill, setNewSkill] = useState({
    category: '',
    specific: '',
    proficiency: 'beginner',
    availability: '',
    description: ''
  });
  
  // Edit mode state
  const [editingSkill, setEditingSkill] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
  // Load user skills on component mount
  useEffect(() => {
    const loadSkills = async () => {
      setLoading(true);
      try {
        const userSkills = getUserSkills(userId);
        setSkills(userSkills);
      } catch (err) {
        setError('Failed to load skills');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadSkills();
  }, [userId]);
  
  // Available skills based on selected category
  const getAvailableSkills = () => {
    if (!newSkill.category) return [];
    
    const categoryData = skillCategories.find(
      cat => cat.id === newSkill.category
    );
    
    return categoryData ? categoryData.skills : [];
  };
  
  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (editingSkill !== null) {
      // Editing existing skill
      const updatedSkills = [...skills];
      updatedSkills[editingSkill] = {
        ...updatedSkills[editingSkill],
        [name]: value
      };
      setSkills(updatedSkills);
    } else {
      // Adding new skill
      setNewSkill({
        ...newSkill,
        [name]: value
      });
    }
  };
  
  // Handle category selection
  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    
    if (editingSkill !== null) {
      // Editing existing skill
      const updatedSkills = [...skills];
      updatedSkills[editingSkill] = {
        ...updatedSkills[editingSkill],
        category: categoryId,
        specific: '' // Reset specific skill when category changes
      };
      setSkills(updatedSkills);
    } else {
      // Adding new skill
      setNewSkill({
        ...newSkill,
        category: categoryId,
        specific: '' // Reset specific skill when category changes
      });
    }
  };
  
  // Handle form submission for adding a new skill
  const handleAddSkill = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Validate form
      if (!newSkill.category) throw new Error('Please select a category');
      if (!newSkill.specific) throw new Error('Please select a specific skill');
      if (!newSkill.proficiency) throw new Error('Please select a proficiency level');
      
      // Add the skill
      const addedSkill = addUserSkill(userId, newSkill);
      
      // Update UI
      setSkills([...skills, addedSkill]);
      setSuccess('Skill added successfully');
      
      // Reset form
      setNewSkill({
        category: '',
        specific: '',
        proficiency: 'beginner',
        availability: '',
        description: ''
      });
      setShowForm(false);
      
    } catch (err) {
      setError(err.message || 'Failed to add skill');
      console.error(err);
    }
  };
  
  // Handle form submission for updating a skill
  const handleUpdateSkill = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Validate form
      if (!skills[editingSkill].category) throw new Error('Please select a category');
      if (!skills[editingSkill].specific) throw new Error('Please select a specific skill');
      if (!skills[editingSkill].proficiency) throw new Error('Please select a proficiency level');
      
      // Update the skill
      const updatedSkill = updateUserSkill(userId, skills[editingSkill]);
      
      // Update UI
      const updatedSkills = [...skills];
      updatedSkills[editingSkill] = updatedSkill;
      setSkills(updatedSkills);
      setSuccess('Skill updated successfully');
      
      // Exit edit mode
      setEditingSkill(null);
      setShowForm(false);
      
    } catch (err) {
      setError(err.message || 'Failed to update skill');
      console.error(err);
    }
  };
  
  // Handle removing a skill
  const handleRemoveSkill = (index) => {
    try {
      const skillToRemove = skills[index];
      
      // Remove the skill
      removeUserSkill(userId, skillToRemove);
      
      // Update UI
      const updatedSkills = [...skills];
      updatedSkills.splice(index, 1);
      setSkills(updatedSkills);
      setSuccess('Skill removed successfully');
      
      // Exit edit mode if we were editing this skill
      if (editingSkill === index) {
        setEditingSkill(null);
        setShowForm(false);
      }
      
    } catch (err) {
      setError(err.message || 'Failed to remove skill');
      console.error(err);
    }
  };
  
  // Start editing a skill
  const startEditing = (index) => {
    setEditingSkill(index);
    setShowForm(true);
    setError('');
    setSuccess('');
  };
  
  // Cancel editing
  const cancelEditing = () => {
    setEditingSkill(null);
    setShowForm(false);
    setError('');
  };
  
  // Start adding a new skill
  const startAddingSkill = () => {
    setEditingSkill(null);
    setShowForm(true);
    setError('');
    setSuccess('');
  };
  
  // Convert proficiency to badge color
  const getProficiencyBadge = (proficiency) => {
    switch (proficiency) {
      case 'beginner':
        return 'bg-blue-100 text-blue-800';
      case 'intermediate':
        return 'bg-green-100 text-green-800';
      case 'expert':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Manage Skills</h2>
        
        {!showForm && (
          <button 
            onClick={startAddingSkill} 
            className="btn btn-primary text-sm"
          >
            Add New Skill
          </button>
        )}
      </div>
      
      {/* Error and success messages */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg fade-in">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg fade-in">
          {success}
        </div>
      )}
      
      {/* Skill form */}
      {showForm && (
        <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 scale-in">
          <h3 className="text-lg font-semibold mb-4">
            {editingSkill !== null ? 'Edit Skill' : 'Add New Skill'}
          </h3>
          
          <form onSubmit={editingSkill !== null ? handleUpdateSkill : handleAddSkill}>
            <div className="space-y-4">
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={editingSkill !== null ? skills[editingSkill]?.category : newSkill.category}
                  onChange={handleCategoryChange}
                  className="w-full input"
                  required
                >
                  <option value="">Select a category</option>
                  {skillCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Specific skill */}
              <div>
                <label htmlFor="specific" className="block text-sm font-medium text-gray-700 mb-1">
                  Specific Skill *
                </label>
                {editingSkill !== null && skills[editingSkill]?.category ? (
                  <select
                    id="specific"
                    name="specific"
                    value={skills[editingSkill]?.specific}
                    onChange={handleInputChange}
                    className="w-full input"
                    required
                  >
                    <option value="">Select a skill</option>
                    {skillCategories.find(c => c.id === skills[editingSkill]?.category)?.skills.map(skill => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                ) : newSkill.category ? (
                  <select
                    id="specific"
                    name="specific"
                    value={newSkill.specific}
                    onChange={handleInputChange}
                    className="w-full input"
                    required
                  >
                    <option value="">Select a skill</option>
                    {getAvailableSkills().map(skill => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    id="specific"
                    name="specific"
                    className="w-full input"
                    disabled
                  >
                    <option value="">Select a category first</option>
                  </select>
                )}
              </div>
              
              {/* Proficiency */}
              <div>
                <label htmlFor="proficiency" className="block text-sm font-medium text-gray-700 mb-1">
                  Proficiency Level *
                </label>
                <select
                  id="proficiency"
                  name="proficiency"
                  value={editingSkill !== null ? skills[editingSkill]?.proficiency : newSkill.proficiency}
                  onChange={handleInputChange}
                  className="w-full input"
                  required
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              
              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={editingSkill !== null ? skills[editingSkill]?.availability : newSkill.availability}
                  onChange={handleInputChange}
                  className="w-full input"
                  placeholder="e.g., Weekends, Evenings, Flexible"
                />
              </div>
              
              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={editingSkill !== null ? skills[editingSkill]?.description : newSkill.description}
                  onChange={handleInputChange}
                  className="w-full input"
                  rows="3"
                  placeholder="Briefly describe your skill and experience level"
                ></textarea>
              </div>
              
              {/* Form buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {editingSkill !== null ? 'Update Skill' : 'Add Skill'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      
      {/* Skills list */}
      {loading ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Loading skills...</p>
        </div>
      ) : skills.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-2">No skills added yet.</p>
          <p className="text-gray-700">Add skills to help people find you for collaboration.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{skill.specific}</h3>
                  <p className="text-sm text-gray-600">{skill.category}</p>
                </div>
                
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyBadge(skill.proficiency)}`}>
                    {skill.proficiency.charAt(0).toUpperCase() + skill.proficiency.slice(1)}
                  </span>
                </div>
              </div>
              
              {skill.availability && (
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Available:</span> {skill.availability}
                </p>
              )}
              
              {skill.description && (
                <p className="text-sm text-gray-700 mt-2">
                  {skill.description}
                </p>
              )}
              
              <div className="flex justify-end space-x-2 mt-3">
                <button
                  onClick={() => startEditing(index)}
                  className="text-sm text-primary-600 hover:text-primary-800"
                >
                  Edit
                </button>
                
                <button
                  onClick={() => handleRemoveSkill(index)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillManager;
