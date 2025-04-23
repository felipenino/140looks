import React, { useState } from 'react';
import { supabase } from '../supabase';

const ImageUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileList = Array.from(e.target.files);
    setImages(fileList);
  };

  const uploadImages = async () => {
    if (!images.length) return;

    setUploading(true);
    const urls: string[] = [];

    try {
      for (const file of images) {
        const fileName = `${Date.now()}-${file.name}`;
        
        const { error, data } = await supabase.storage
          .from('clothing')
          .upload(fileName, file);

        if (error) {
          console.error("Upload error:", error);
          continue;
        }

        if (data) {
          const { data: publicUrlData } = supabase.storage
            .from('clothing')
            .getPublicUrl(data.path);
          
          urls.push(publicUrlData.publicUrl);
        }
      }

      setUploadedUrls(urls);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Upload Images to Supabase</h2>
      <input 
        type="file" 
        multiple 
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button 
        onClick={uploadImages}
        disabled={uploading || !images.length}
        className="bg-black-main text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload Images'}
      </button>

      {uploadedUrls.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium mb-2">Uploaded Image URLs:</h3>
          <ul className="text-xs break-all">
            {uploadedUrls.map((url, index) => (
              <li key={index} className="mb-1">
                {url}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;