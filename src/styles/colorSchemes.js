const colorSchemes = {
  Light: {
    Crimson: {
      background: '#F2E6FF',
      themeButton: {
        default: { bg: '#FF2D55', text: '#581E64' },
        hover: { bg: '#FF0000', text: '#2A2152' },
        clicked: { bg: '#BB0059', text: '#000B16' }
      },
      modeButton: {
        default: { bg: '#FFA9E7', text: '#581E64' },
        hover: { bg: '#FF84C3', text: '#2A2152' },
        clicked: { bg: '#FF2D55', text: '#000B16' }
      }
    },
    Aura: {
      background: '#FFF5FF',
      themeButton: {
        default: { bg: '#FFD354', text: '#C92A4B' },
        hover: { bg: '#F9E000', text: '#A00153' },
        clicked: { bg: '#FC8127', text: '#3C004B' }
      },
      modeButton: {
        default: { bg: '#FFD7F3', text: '#C92A4B' },
        hover: { bg: '#FFCAC8', text: '#A00153' },
        clicked: { bg: '#FFD354', text: '#3C004B' }
      }
    },
    Field: {
      background: '#CFFFFF',
      themeButton: {
        default: { bg: '#00FF78', text: '#007B9E' },
        hover: { bg: '#33FF00', text: '#005886' },
        clicked: { bg: '#00C08D', text: '#001A33' }
      },
      modeButton: {
        default: { bg: '#2FFFFF', text: '#007B9E' },
        hover: { bg: '#00FFE4', text: '#005886' },
        clicked: { bg: '#00FF78', text: '#001A33' }
      }
    }
  },
  Dark: {
    Crimson: {
      background: '#0B1A36',
      themeButton: {
        default: { bg: '#FF2D55', text: '#581E64' },
        hover: { bg: '#FF0000', text: '#2A2152' },
        clicked: { bg: '#F5CAFC', text: '#000B16' }
      },
      modeButton: {
        default: { bg: '#2A2152', text: '#BB0059' },
        hover: { bg: '#581E64', text: '#E1003C' },
        clicked: { bg: '#BB0059', text: '#FF5A91' }
      }
    },
    Aura: {
      background: '#700053',
      themeButton: {
        default: { bg: '#FFD354', text: '#C92A4B' },
        hover: { bg: '#F9E000', text: '#A00153' },
        clicked: { bg: '#FFE7FF', text: '#3C004B' }
      },
      modeButton: {
        default: { bg: '#A00153', text: '#FC8127' },
        hover: { bg: '#C92A4B', text: '#FFB003' },
        clicked: { bg: '#FC8127', text: '#FFC891' }
      }
    },
    Field: {
      background: '#003760',
      themeButton: {
        default: { bg: '#00FF78', text: '#007B9E' },
        hover: { bg: '#33FF00', text: '#005886' },
        clicked: { bg: '#91FFFF', text: '#001A33' }
      },
      modeButton: {
        default: { bg: '#005886', text: '#00C08D' },
        hover: { bg: '#007B9E', text: '#00E265' },
        clicked: { bg: '#00C08D', text: '#00FFB6' }
      }
    }
  }
};

export default colorSchemes;