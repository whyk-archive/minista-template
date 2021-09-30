import React from 'react';
import { getImagePath, Path } from '../../utils/imagePath';

interface Props {
  path: Path
  alt: string
}

export const Image: React.VFC<Props> = ({path, alt}) => (
  <img src={getImagePath(path)} alt={alt} />
)
