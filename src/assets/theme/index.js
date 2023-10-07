const theme = {
  background: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
    threeColor: '#fff'
  },
  border: {
    primaryColor: "#ddd",
  },
  mixin: {
    boxShadow: `
      cursor: pointer;
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 10px rgba(0,0,0,.18);
      }
    `,
    ellipsisLine2: `
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -moz-box;
    -moz-line-clamp: 2;
    -moz-box-orient: vertical;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    overflow: hidden;
    `
  },

}

export default theme
