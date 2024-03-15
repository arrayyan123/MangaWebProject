<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FanartController extends Controller
{
    public function uploadFanart(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:100000',
            'altText' => 'string',
        ]);
        $fanartCount = count(Storage::files('public/Images/Fanarts'));
        $fanartNumber = $fanartCount + 1;
        $imageName = 'fanart' . $fanartNumber . '.' . $request->image->getClientOriginalExtension();
        $imagePath = $request->file('image')->storeAs('public/Images/Fanarts', $imageName);
    
        return response()->json(['imagePath' => $imagePath]);
    }
    public function getFanartUrls()
    {
        $fanartFiles = Storage::files('public/Images/Fanarts');
        $fanartUrls = [];

        foreach ($fanartFiles as $file) {
            $fanartUrls[] = Storage::url($file);
        }

        return response()->json(['fanartUrls' => $fanartUrls]);
    }

}
?>