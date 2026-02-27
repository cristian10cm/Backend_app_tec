export interface PublicationDetails {
  id: string;
  createAt: Date;
  description: string;
  img: string;
  price: number;
  brandId: string;
  userId: string;

  author: {
    id: string;
    name: string;
    photo: string;
  };

  likesCount: number;
  commentsCount: number;
}
