const CARDS = {
  "Accumulated Knowledge": "ab061406-38f4-40e7-a9ea-e3cbcaabc127",
  "Anarchy":               "28d941da-b5cb-4b7e-84f2-ece883f89af3",
  "Anger":                 "fa2920af-e6a1-4939-ab59-67af4430e5b8",
  "Annul":                 "3f8c73ff-be92-41ca-93a7-76f9823adb38",
  "Argothian Enchantress": "9ababc1a-515e-4e20-8819-19d84d9b0af5",
  "Aura of Silence":       "57e6c366-b8c7-4f66-b8e1-82dc69c0081c",
  "Blue Elemental Blast":  "7f07e272-6cc7-46d6-ad5c-473d1021c179",
  "Brain Freeze":          "59a43ef5-08f0-44fc-802d-b6cfd56b7d1f",
  "Brushland":             "170e5ccd-54bf-4c6d-86b4-0359ca8f36e8",
  "Call of the Herd":      "429a88cc-53db-4c5e-a061-f0f49a38c675",
  "Caller of the Claw":    "a073459e-1f00-47e0-a1b3-d30203aa35d1",
  "Chill":                 "5a7bd777-6f11-441e-887f-9cee1ef96035",
  "Counterspell":          "aedbcbaa-40f0-485f-8427-778edc2d2ec0",
  "Cursed Totem":          "cc99ee76-45b6-4f1d-b0b0-7da8775ca90c",
  "Daze":                  "d03bff25-0d5e-4dcf-8d75-6df846afea3b",
  "Deep Analysis":         "01e3c2e9-d8df-4a7a-be86-7be8c6254fa2",
  "Defense Grid":          "5c2592c9-7e64-40c1-a9cb-c0994094a1e0",
  "Deranged Hermit":       "bf0e94c9-61c4-4cc0-b5ce-db62bc2660ee",
  "Dominate":              "63b2dcb1-8c3e-434c-865a-196d4d799706",
  "Duress":                "ca367f49-0f4a-4b7f-8104-851893fbcd8a",
  "Earthquake":            "272f65a3-3c0c-417d-b5b6-276a643d643e",
  "Elephant Grass":        "f4c1f5a7-0d28-43ab-9b66-937e963f42cd",
  "Enchantress's Presence":"75def198-99d6-4b0a-8878-5151f44bc0a4",
  "Engineered Plague":     "27e158d5-efb2-4f90-8898-60ede98f7d29",
  "Essence Flare":         "13ebb5dd-d7f1-4b06-8585-7004045be542",
  "Exploration":           "2f09e451-0246-45a2-8bfd-07d3c65ddfe6",
  "Flash of Insight":      "ffaab905-0b97-42c2-a1a3-1e72275caa82",
  "Foil":                  "870fb793-3107-4cb2-ba78-34fbf5c9da2f",
  "Forest":                "a8990632-f055-4583-ae85-5ac742549b61",
  "Fyndhorn Elves":        "3ba95ffa-990a-4013-98b7-5d8c0b34e9c4",
  "Gaea's Blessing":       "ee83d511-57e0-40fb-a4db-62f6c2c39888",
  "Gaea's Cradle":         "25b0b816-0583-44aa-9dc5-f3ff48993a51",
  "Gempalm Incinerator":   "2687c311-fd0c-4fe0-bce8-e3f412216796",
  "Goblin Goon":           "6c77cac8-fe95-4925-a815-8c514cc41b22",
  "Goblin King":           "65705a8d-6bb1-4289-b8b0-8546ccc478dc",
  "Goblin Lackey":         "9b848caa-aad8-4060-8f86-304a8556de2d",
  "Goblin Matron":         "9e9e2e5d-ad06-4378-9afb-ffb174e6a5b4",
  "Goblin Piledriver":     "f6c4df1f-f148-42ec-8e22-e7114216927d",
  "Goblin Ringleader":     "b6b2cd77-9552-48b1-80cb-26966323c1ea",
  "Goblin Sharpshooter":   "7e689df7-b85d-4346-bee8-5e978b5cbbbc",
  "Goblin Tinkerer":       "e6529852-8b3e-4a70-a4a1-029e012231c6",
  "Goblin Warchief":       "66864a4b-8924-40ef-a337-15b12413a158",
  "Gush":                  "e755bbef-bf34-49c0-ae72-d70e3599de52",
  "Haunting Echoes":       "aca4c571-48b8-4150-93f8-4cb5c8e797c4",
  "Hydroblast":            "f62716f0-fde2-49ef-b8a4-c1b03f451194",
  "Impulse":               "9d710a97-062f-4773-b6c6-8aeddeb3b6e8",
  "Infest":                "b7890ba2-aa42-4c8d-bbc1-94fb1d4150fc",
  "Intuition":             "c99f6785-e5a1-4fdc-9fb5-e1a372e7e848",
  "Island":                "b38e48ff-17c8-470c-ba8b-966da1777e77",
  "Karplusan Forest":      "ba6f1263-d598-49fb-b5f8-09f11822ebd0",
  "Krosan Reclamation":    "5b3c5144-7e15-46c6-b819-d729ecb30bb1",
  "Llanowar Elves":        "75d972d7-5ed9-49c1-8d27-ec162771284d",
  "Masticore":             "908a2215-7231-43a4-8fec-5d1e4233c028",
  "Mirri's Guile":         "73d51a3c-95c0-4810-b847-4b8afd12fd64",
  "Mishra's Factory":      "4047df9c-335c-4c1a-968d-00f40e2e7386",
  "Mogg Fanatic":          "ca2ecfd4-c874-4468-8601-87aa110d5a00",
  "Mountain":              "be7e4b30-7f45-4109-b5ed-9223a9422d95",
  "Mox Diamond":           "28028830-83ed-45e2-b495-3b9ad9d3e988",
  "Multani's Acolyte":     "4e5fdecb-bca0-48ea-b5bb-d0886c7d3316",
  "Nantuko Vigilante":     "e7474849-a6b4-4f3b-a836-37b88c26047b",
  "Naturalize":            "c0acc41f-b55b-47cb-8803-d39d72788799",
  "Oath of Druids":        "cf14de50-d123-400c-862e-2c95fd2aa23f",
  "Opalescence":           "3c0071fb-afa5-47b5-b266-2b10a4f5a98a",
  "Opt":                   "958262ec-8e52-40cf-a9fd-a60e42643e15",
  "Overload":              "c91fca91-7296-422e-b251-d571b710ff71",
  "Parallax Wave":         "cef789e8-e4cc-4f61-bc15-debc2487777f",
  "Peek":                  "f50843cc-20ac-4746-816e-f2630aa31594",
  "Phyrexian Dreadnought": "7b8197b9-0cd1-4fa1-9668-d1b5f1759151",
  "Phyrexian Furnace":     "e98bca31-8c05-430b-b5d7-331bdc55710a",
  "Polluted Delta":        "0f7585c8-9e21-4eef-afc1-2852de23db2f",
  "Portent":               "e040be83-3fb5-4da5-ba7a-4923b8854b74",
  "Powder Keg":            "4d9715c2-9036-4ae2-a5b4-1b190d50c963",
  "Priest of Titania":     "965c33c3-0c68-4516-b8b0-5a0552ed44b6",
  "Psychatog":             "6757bf0e-489f-4be2-9e41-463b59f00dd1",
  "Pyroblast":             "c342cac5-08ae-4428-9c2c-f6c5904e54d2",
  "Pyroclasm":             "88040748-ad76-4b9a-bd4e-87e5980e9816",
  "Pyrokinesis":           "db2a5e85-6cbc-43c1-9362-4056ad017ef0",
  "Quirion Ranger":        "56efe72c-6d7f-44f6-ac74-01af9305c4b6",
  "Red Elemental Blast":   "4fafd3f9-f7de-4d6e-8824-6b60866fc50f",
  "Replenish":             "7fd2fe13-bbc0-42b7-bc42-3b51910ce118",
  "Rishadan Port":         "477a1f53-5cdf-4b45-b584-2e36b31a3fdb",
  "Sacred Ground":         "37ae4b01-a9c1-4eec-9204-78cb2508e0df",
  "Seal of Cleansing":     "af6c921e-1b82-412c-9979-adfdf83440f7",
  "Serra's Sanctum":       "f7a18130-dbaa-4657-a885-3a96a985935a",
  "Siege-Gang Commander":  "92e78cec-aaf9-4fe8-887b-b7e356d63315",
  "Skirk Prospector":      "eb545dcd-3a7a-46a7-9c35-d28faebc6d17",
  "Skyshroud Poacher":     "0fb4e44e-656e-4294-a53b-1f7aa96fab31",
  "Smother":               "9a8321af-d667-44e7-8c03-3957286604b9",
  "Solitary Confinement":  "e7a8eb7a-eb3f-405e-8f44-d8ea64d76386",
  "Sphere of Resistance":  "17f4d2a5-bb85-4662-b2dd-a363ec7eab9b",
  "Squee, Goblin Nabob":   "4ba8325a-1203-4125-9111-94d9e2b1f14b",
  "Sterling Grove":        "40b26aa3-8169-4978-9554-bd2fc8e18e3b",
  "Stifle":                "2d7643c0-b2db-478f-944e-b27b77bad3eb",
  "Stone Rain":            "5a002e6d-ea59-4694-b3e5-075d6020b0d9",
  "Survival of the Fittest":"c060c178-3c0e-493f-b6f0-ead5b1d6f191",
  "Swamp":                 "5912d2aa-fe91-4cea-9c7a-6dca745f8560",
  "Swords to Plowshares":  "375fd2cb-443b-4be4-ad60-6d1a8e74f510",
  "Sylvan Library":        "f486df00-7c4a-4ff0-bb0b-c8b5432ac742",
  "Tangle Wire":           "ad62f313-8a8a-4ffa-ada2-b12b76288729",
  "Terravore":             "c39c412b-2f21-483a-b744-5d55bc007c0d",
  "Thermokarst":           "00ae906b-2c4d-48e9-9f2d-217777e22292",
  "Thwart":                "c12a0717-e9ea-4be3-a29f-179671ed4489",
  "Tormod's Crypt":        "0f9668ba-d26d-4484-b4b8-6fb91fbfb617",
  "Treetop Village":       "02212bd8-0c0f-4e8e-99f1-a8477476c03a",
  "Tsabo's Web":           "0dee69f8-cceb-41b9-a0ee-6b2ac9f4bad9",
  "Uktabi Orangutan":      "101c7d58-43cc-4ebd-87f1-2016fbff56dd",
  "Underground River":     "92369d7e-5e5a-46f9-bb31-c57d62410283",
  "Vendetta":              "67ced38e-0f33-4bda-8e18-09f6ac03a3d7",
  "Vision Charm":          "78b384d3-3adf-493a-8b89-bfe68fd1c3e2",
  "Wall of Blossoms":      "7eb4a1a3-efcf-4c9a-ad1f-0a3f8f2b456f",
  "Wasteland":             "99ff731b-8399-40c8-b539-ba6ba5783771",
  "Wild Growth":           "f8047ab9-a0fc-4933-bcbc-e761aa0f622b",
  "Windswept Heath":       "7a7c5941-9c8a-4a40-9efb-a84f05c58e53",
  "Winter's Grasp":        "7af28a5d-45dc-4e31-9009-5c0bd25a9032",
  "Wirewood Symbiote":     "49488b76-abaf-4dba-b01f-7b418e4ff295",
  "Wonder":                "44670666-9028-4b4a-a5af-a3bf35fc6a21",
  "Wooded Foothills":      "cdad38f7-9dfa-4f1b-9fac-41ab2b253f53",
  "Worship":               "908781a0-1ba4-4027-bd9d-13f9faf08686",
  "Xantid Swarm":          "6a87911a-3931-46aa-9348-2728c4b73b96",
  "Yavimaya Granger":      "05414a41-b50c-49b6-9c27-f3170017d9b0",
  "Zombie Infestation":    "ccd5f98a-7ab5-44b3-850c-b50963dace66",
  "Zuran Orb":             "3a9d1082-a862-45d4-9e5e-392e879fead6",
};

function scryfallImg(uuid) {
  return `https://cards.scryfall.io/normal/front/${uuid[0]}/${uuid[1]}/${uuid}.jpg`;
}

// Sort longest first so multi-word names match before shorter substrings
const sortedNames = Object.keys(CARDS).sort((a, b) => b.length - a.length);

const escapedNames = sortedNames.map(n =>
  n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
   .replace(/'/g, "(?:'|\u2019)")
);
const pattern = new RegExp(`(${escapedNames.join('|')})`, 'g');

function annotateTextNode(node) {
  const text = node.textContent;
  pattern.lastIndex = 0;
  if (!pattern.test(text)) return;

  pattern.lastIndex = 0;
  const frag = document.createDocumentFragment();
  let last = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      frag.appendChild(document.createTextNode(text.slice(last, match.index)));
    }
    const span = document.createElement('span');
    span.className = 'card-ref';
    span.textContent = match[0];
    span.dataset.uuid = CARDS[match[0].replace(/\u2019/g, "'")];
    frag.appendChild(span);
    last = pattern.lastIndex;
  }

  if (last < text.length) {
    frag.appendChild(document.createTextNode(text.slice(last)));
  }

  node.parentNode.replaceChild(frag, node);
}

function walkTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    annotateTextNode(node);
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  const tag = node.tagName.toLowerCase();
  if (tag === 'script' || tag === 'style' || tag === 'pre' || tag === 'code') return;
  if (node.classList && node.classList.contains('card-ref')) return;
  Array.from(node.childNodes).forEach(walkTextNodes);
}

function annotateParagraphs() {
  const content = document.querySelector('.post-content');
  if (content) walkTextNodes(content);
}

// Tooltip
const tooltip = document.createElement('div');
tooltip.id = 'card-tooltip';
tooltip.innerHTML = '<img alt="">';
document.body.appendChild(tooltip);
const tooltipImg = tooltip.querySelector('img');

let activeRef = null;

function showTooltip(ref, e) {
  if (ref === activeRef) return;
  activeRef = ref;
  tooltipImg.src = scryfallImg(ref.dataset.uuid);
  tooltipImg.alt = ref.textContent;
  tooltip.style.display = 'block';
  moveTooltip(e);
}

function moveTooltip(e) {
  const margin = 16;
  const tw = 215; // 300 * 488/680
  const th = 300;

  let x = e.clientX + margin;
  let y = e.clientY + margin;
  if (x + tw > window.innerWidth)  x = e.clientX - tw - margin;
  if (y + th > window.innerHeight) y = e.clientY - th - margin;

  tooltip.style.left = x + 'px';
  tooltip.style.top  = y + 'px';
}

function hideTooltip() {
  activeRef = null;
  tooltip.style.display = 'none';
}

document.addEventListener('mouseover', e => {
  const ref = e.target.closest('.card-ref');
  if (ref) showTooltip(ref, e); else hideTooltip();
});

document.addEventListener('mousemove', e => {
  if (activeRef) moveTooltip(e);
});

document.addEventListener('DOMContentLoaded', annotateParagraphs);
