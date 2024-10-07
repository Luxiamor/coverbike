export async function loadFonts() {
  const werbFontLoader = await import("webfontloader");

  werbFontLoader.load({ google: { families: ["Roboto:100,300,400,500,700,900&display=swap"] } });
}
