<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class MangaController extends Controller
{
    public function manga()
    {
        // Read the manga data from the JSX file
        $mangaData = File::get(public_path('/js/Components/Home/Pagination/MangaList.jsx'));

        // Return the manga data as JSON
        return response()->json($mangaData);
    }

    public function show($id)
    {
        $mangaData = File::get(public_path('/js/Components/Home/Pagination/MangaList.jsx'));
        
        // Parse the JSON data
        $mangaList = json_decode($mangaData, true);

        // Find the manga with the provided ID
        $manga = collect($mangaList)->firstWhere('id', $id);

        if ($manga) {
            // Return manga details as JSON response
            return response()->json($manga);
        } else {
            // Return error response if manga not found
            return response()->json(['error' => 'Manga not found'], 404);
        }
    }
}
