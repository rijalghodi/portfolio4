export const orionStars = {
  left_leg: {
    x: 0.3,
    y: 0.1,
    size: 0.95, // Saiph (magnitude ~2.06)
    color: "#F5F5DC",
  },
  right_leg: {
    x: 0.6,
    y: 0.13,
    size: 1.0, // Rigel (magnitude ~0.13)
    color: "#F5F5DC",
  },
  left_belt: {
    x: 0.34,
    y: 0.31,
    size: 0.85, // Alnitak (magnitude ~1.74)
    color: "#F0FFFF",
  },
  middle_belt: {
    x: 0.41,
    y: 0.34,
    size: 0.8, // Alnilam (magnitude ~1.69)
    color: "#F0FFFF",
  },
  right_belt: {
    x: 0.46,
    y: 0.38,
    size: 0.75, // Mintaka (magnitude ~2.23)
    color: "#F0FFFF",
  },
  left_armpit: {
    x: 0.24,
    y: 0.61,
    size: 0.7, // Bellatrix (magnitude ~1.64)
    color: "#FFE4B5",
  },
  head: {
    x: 0.4,
    y: 0.7,
    size: 0.9, // Betelgeuse (magnitude ~0.42)
    color: "#FF4500",
  },
  right_armpit: {
    x: 0.49,
    y: 0.6,
    size: 0.65, // Meissa (magnitude ~3.39)
    color: "#FFE4B5",
  },
  middle_arrow: {
    x: 0.83,
    y: 0.64,
    size: 0.6, // Approximate magnitude ~4.0
    color: "#F0FFF0",
  },
  lower_arrow: {
    x: 0.82,
    y: 0.57,
    size: 0.55, // Approximate magnitude ~4.5
    color: "#F0FFF0",
  },
  bottom_arrow: {
    x: 0.8,
    y: 0.45,
    size: 0.5, // Approximate magnitude ~5.0
    color: "#F0FFF0",
  },
  upper_arrow: {
    x: 0.79,
    y: 0.71,
    size: 0.45, // Approximate magnitude ~5.5
    color: "#F0FFF0",
  },
  top_arrow: {
    x: 0.68,
    y: 0.94,
    size: 0.4, // Approximate magnitude ~6.0
    color: "#F0FFF0",
  },
  left_arm_elbow: {
    x: 0.22,
    y: 0.74,
    size: 0.65, // Approximate magnitude ~3.0
    color: "#FFE4B5",
  },
  left_hand_one: {
    x: 0.22,
    y: 0.9,
    size: 0.6, // Approximate magnitude ~3.5
    color: "#FFE4B5",
  },
  left_hand_two: {
    x: 0.3,
    y: 0.91,
    size: 0.55, // Approximate magnitude ~4.0
    color: "#FFE4B5",
  },
};

export const orionLines = [
  {
    start: "left_leg",
    end: "right_leg",
  },
  {
    start: "left_leg",
    end: "left_belt",
  },
  {
    start: "right_leg",
    end: "right_belt",
  },
  {
    start: "left_belt",
    end: "middle_belt",
  },
  {
    start: "middle_belt",
    end: "right_belt",
  },
  {
    start: "left_belt",
    end: "left_armpit",
  },
  {
    start: "right_belt",
    end: "right_armpit",
  },
  {
    start: "left_armpit",
    end: "head",
  },
  {
    start: "head",
    end: "right_armpit",
  },
  {
    start: "right_armpit",
    end: "middle_arrow",
  },
  {
    start: "middle_arrow",
    end: "lower_arrow",
  },
  {
    start: "lower_arrow",
    end: "bottom_arrow",
  },
  {
    start: "middle_arrow",
    end: "upper_arrow",
  },
  {
    start: "upper_arrow",
    end: "top_arrow",
  },
  {
    start: "left_armpit",
    end: "left_arm_elbow",
  },
  {
    start: "left_arm_elbow",
    end: "left_hand_one",
  },
  {
    start: "left_arm_elbow",
    end: "left_hand_two",
  },
];
