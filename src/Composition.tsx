import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "7em",
      }}
    >
      <p>{`フレーム数：${frame}`}</p>
      <div style={{ opacity }}>Hello, World</div>
    </AbsoluteFill>
  );
};
