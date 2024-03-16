<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class FanartController extends Controller
{
    public function uploadFanart(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|max:1000000',
                'altText' => 'string',
                'title' => 'string',
            ]);

            $fanartCount = count(Storage::files('public/Images/Fanarts'));
            $fanartNumber = $fanartCount + 1;
            $imageName = 'fanart' . $fanartNumber . '.' . $request->image->getClientOriginalExtension();
            $imagePath = $request->file('image')->storeAs('public/Images/Fanarts', $imageName);
            $title = $request->title;
            Storage::put('public/Images/Fanarts/titles/' . $imageName . '.txt', $title);

            return response()->json(['message' => 'Fanart uploaded successfully']);
        } catch (\Exception $e) {
            Log::error('Error uploading fanart: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function getFanartUrls()
    {
        $fanartFiles = Storage::files('public/Images/Fanarts');
        $fanartUrls = array_map(function ($file) {
            return Storage::url($file);
        }, $fanartFiles);

        return response()->json(['fanartUrls' => $fanartUrls]);
    }

    public function getFanartTitle(Request $request)
    {
        $imageUrl = $request->input('imageUrl');
        $imageName = basename($imageUrl);
        $titlePath = 'public/Images/Fanarts/titles/' . $imageName . '.txt';

        if (Storage::exists($titlePath)) {
            $title = Storage::get($titlePath);
            return response()->json(['title' => $title]);
        } else {
            return response()->json(['title' => 'Title Not Found']);
        }
    }
}
?>