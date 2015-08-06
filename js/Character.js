function Character(sName, sLevel, sGender, sAlignment) {

  this.Level = sLevel || 1;

  // Personal Info
  this.Name = sName || "New Character";
  this.Gender = sGender || "Queer";
  this.Alignment = sAlignment || "Neutral";
                 
  // Attribute Properties
  this.Attributes = new Object();
  //this.AttributeModifier = new Object(); // this should be a method call. revisit.
  this.RemainingAttributeBuyPoints = 0;

  // Skills
  this.Skills = new Object();

  // Race/Class Properties
  this.Race = new Object();
  this.Classes = new Object();
  this.Feats = new Object();
  this.Stats = new Object();

};
  
Character.prototype.HasClass = function (sClassName){
  return (sClassName in this.Classes); 
};

Character.prototype.AttributeScore = function (sAttributeName){
  return this.BaseAttributeScore[sAttributeName] + //
    this.AttributeModifier[sAttributeName];
};