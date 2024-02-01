import Item from "../(models)/buy";
import { NextResponse } from "next/server";

import uploadImage from "../(models)/image";

export const POST = async (req) => {
  const body = await req.json();

  const { itemName, duration, image, price } = body;

  const item = new Item({
    itemName,
    duration,
    image,
    price,
  });

  try {
    await item.save();

    await uploadImage(image);

    return NextResponse.json({
      success: true,
      message: "Item added successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error });
  }
};
