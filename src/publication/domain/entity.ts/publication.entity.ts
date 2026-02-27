export class Publication {
  private constructor(
    public readonly id: string,
    public readonly createAt: Date,
    public readonly description: string,
    public readonly img: string,
    public readonly price: number,
    public readonly brandId: string,
    public readonly userId: string,
    public readonly author?: {
      id: string;
      name: string;
      photo: string;
    },
    public readonly likesCount: number = 0,
    public readonly commentsCount: number = 0,
  ) {}

  static create(data: {
    description: string;
    img: string;
    price: number;
    brandId: string;
    userId: string;
  }): Publication {
    return new Publication(
      crypto.randomUUID(),
      new Date(),
      data.description,
      data.img,
      data.price,
      data.brandId,
      data.userId,
    );
  }

  update(data: {
    description?: string;
    img?: string;
    price?: number;
    brandId?: string;
  }): Publication {
    return new Publication(
      this.id,
      this.createAt,
      data.description ?? this.description,
      data.img ?? this.img,
      data.price ?? this.price,
      data.brandId ?? this.brandId,
      this.userId,
      this.author,
      this.likesCount,
      this.commentsCount,
    );
  }

  static fromPersistence(data: {
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
  }): Publication {
    return new Publication(
      data.id,
      data.createAt,
      data.description,
      data.img,
      data.price,
      data.brandId,
      data.userId,
      data.author,
      data.likesCount,
      data.commentsCount,
    );
  }
}
