"use client";
import React from "react";
import { useToast } from "../ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: any;
};
const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    toast({
      title: "Image uploaded successfully",
      description: "You used 1 of your credit balance",
      duration: 2000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 2000,
      className: "error-toast",
    });
  };
  return (
    <CldUploadWidget
      uploadPreset="devansh_imageiq"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">Original</h3>
          {publicId ? <>Here is the image</> : <div className="media-uploader_cta" onClick={()=>open()}>
            
            <div className="media-uploader_cta-image">
                <Image src="/assets/icons/add.svg" alt="Add Image"
                width={24}
                height={24}

                />
            </div>
                <p className="p-14-medium">Click here to upload image</p>
            </div>}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
