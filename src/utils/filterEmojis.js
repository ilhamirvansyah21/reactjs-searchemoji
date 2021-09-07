export const filterEmojis = ({
  emojisData,
  searchText = "",
  maxResults = 20,
}) => {
  const filteredEmojis = emojisData.filter((emojis) => {
    if (emojis.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emojis.keywords.includes(searchText.toLowerCase)) {
      return true;
    }

    return false;
  });

  return filteredEmojis.splice(0, maxResults);
};
