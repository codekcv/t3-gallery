const mockUrls = [
  "https://utfs.io/f/93cf8637-2678-4702-b3e8-cd4e19934004-l7snzg.png",
  "https://utfs.io/f/6b796def-8b94-43ff-9222-16f3151f04aa-ulac6.jpg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
