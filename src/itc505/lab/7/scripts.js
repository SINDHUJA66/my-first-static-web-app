const madLibForm = document.getElementById('madLibForm');
const madLibResult = document.getElementById('madLibResult');

madLibForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const pluralNoun = document.getElementById('pluralNoun').value;
  const adjective = document.getElementById('adjective').value;
  const verb = document.getElementById('verb').value;
  const adverb = document.getElementById('adverb').value;
  const place = document.getElementById('place').value;
  const number = document.getElementById('number').value;

  const madLib = `The ${adjective} ${pluralNoun} ${verb} ${adverb} in the ${place} were known for their ${adjective} charm. Among the ${place}, these ${pluralNoun} were seen ${adverb} ${verb} and creating a ${adjective} atmosphere. Exploring the ${place}, they found ${number} ${adjective} ${pluralNoun} ${verb} ${adverb} around every corner. The ${place} resonated with the echoes of ${adverb} ${verb} ${adjective} ${pluralNoun}.`;

  madLibResult.textContent = madLib;
});
