export function BoxShadow(height: number) {
  // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
  return {
    // apple ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Math.round(height / 2),
    },
    shadowOpacity:
      Math.round(((0.4 / 23) * (height - 1) + 0.18 + Number.EPSILON) * 100) /
      100,
    shadowRadius:
      Math.round(((15 / 23) * (height - 1) + 1.0 + Number.EPSILON) * 100) / 100,

    // android
    elevation: height,
  };
}
