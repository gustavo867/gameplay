export function getNameByCategory(id: string) {
  const obj = {
    "1": "Ranqueada",
    "2": "Duelo 1x1",
    "3": "Diversão",
    "4": "Treino",
  };

  return obj[id as "1"];
}

export function getTextByStatus(id: string) {
  const obj = {
    online: "Disponível",
    busy: "Ocupado",
    offline: "Offline",
  };

  return obj[id as "online"];
}
