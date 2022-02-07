export const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: 'image',
      src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
      height: 350,
      width: 250,
    },
    {
      src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
      height: 350,
      width: 250,
    },
    {
      src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
      height: 350,
      width: 250,
    },
  ];
  res.json(assets);
};
