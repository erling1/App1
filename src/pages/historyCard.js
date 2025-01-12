
import React from "react";
import { familyData } from "../data/familydata";

const PersonCard = ({ personId }) => {
    // Get person's data from the familyData object, or use defaults if not found
    const person = familyData[personId] || {
      name: personId,
      imageUrl: "/api/placeholder/160/160"
    };
  
    return (
      <div className="link-container">
       <a href="/pages/InfoRelativeFamilyHistory" className="link">{person.name}</a>
        <div className="card">
          <div className="profile-image">
            <div className="image-container">
              <img 
                src={person.imageUrl} 
                alt={person.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="name">{person.name}</h2>
          
          {/* Additional person-specific information */}
          {person.birthDate && (
            <p className="text-sm text-gray-300 mt-1">Born: {person.birthDate}</p>
          )}
          {person.birthPlace && (
            <p className="text-sm text-gray-300">{person.birthPlace}</p>
          )}
          {person.occupation && (
            <p className="text-sm text-gray-300">{person.occupation}</p>
          )}
        </div>
      </div>
    );
  };
  
  export default PersonCard;