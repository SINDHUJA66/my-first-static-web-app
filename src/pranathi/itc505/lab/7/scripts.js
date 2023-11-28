const madLibForm = document.getElementById('madLibForm');
const madLibResult = document.getElementById('madLibResult');

madLibForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const pluralNoun = document.getElementById('pluralNoun').value;
  const adjective = document.getElementById('adjective').value;
  const verb = document.getElementById('verb').value;
  const adverb = document.getElementById('adverb').value;
  const place = document.getElementById('place').value;
  
  const madLib = `The ${adjective} ${pluralNoun} ${verb} ${adverb} in the ${place} was a sight to behold. Among the ${adjective} ${place}, the ${pluralNoun} ${verb} ${adverb} with an air of ${adjective} mystery. Exploring the ${place}, they encountered ${adjective} ${pluralNoun} ${verb} ${adverb} everywhere. The ${adjective} ${place} echoed with the sounds of ${adverb} ${verb} ${pluralNoun}.`;


  madLibResult.textContent = madLib;
});
