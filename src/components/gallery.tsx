import { Suspense, use } from 'react';
import {
  getAlbumInfo,
  getMySharedLink,
  setBaseUrl,
  type AssetResponseDto,
} from '@immich/sdk';

const IMMICH_BASE_URL = 'https://immich.ggorg.xyz/api';
const IMMICH_SHARE_KEY =
  'oZ9boml3W05J0PfFInryAZul46LSQouwQRMDSEln0uSKGaYfl52fMm7suyft5xfOjaA';

setBaseUrl(IMMICH_BASE_URL);

export default function Gallery() {
  return (
    <div className="flex h-screen shrink-0 snap-start flex-col place-items-center items-center justify-center gap-4">
      <h2 className="text-xl">Gallery</h2>

      <div className="flex max-w-6xl flex-row items-center gap-4 overflow-x-scroll">
        <Suspense>
          <GalleryInner />
        </Suspense>
      </div>
    </div>
  );
}

const fetchAssetsPromise = fetchAssets();

function GalleryInner() {
  const assets = use(fetchAssetsPromise);

  return (
    <>
      {assets.map((asset) => (
        <GalleryImage key={asset.id} asset={asset} />
      ))}
    </>
  );
}

async function fetchAssets() {
  const sharedLink = await getMySharedLink({ key: IMMICH_SHARE_KEY });
  const albumId = sharedLink.album?.id;

  if (!albumId) {
    throw new Error('Album not found in shared link');
  }

  const albumInfo = await getAlbumInfo({ id: albumId, key: IMMICH_SHARE_KEY });
  return albumInfo.assets;
}

function GalleryImage({ asset }: { asset: AssetResponseDto }) {
  const imageUrl = `${IMMICH_BASE_URL}/assets/${asset.id}/thumbnail?edited=true&key=${IMMICH_SHARE_KEY}`;

  return (
    <img
      src={imageUrl}
      alt={asset.id}
      // style={{
      //   aspectRatio: asset.width && asset.height ? `${asset.width.toString()} / ${asset.height.toString()}` : undefined,
      // }}
    />
  );
}
