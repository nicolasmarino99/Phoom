// eslint-disable-next-line import/prefer-default-export
export const addCoinsToScenario = (scenario) => {
  scenario.coinsb = scenario.physics.add.group({
    key: 'cb',
    repeat: 11 * 5,
    setXY: { x: 149, y: 0, stepX: 70 },
  });
  scenario.coinsg = scenario.physics.add.group({
    key: 'cg',
    repeat: 11 * 3,
    setXY: { x: 4100, y: 0, stepX: 70 },
  });
  scenario.coinso = scenario.physics.add.group({
    key: 'co',
    repeat: 11,
    setXY: { x: 5500, y: 0, stepX: 70 },
  });
};