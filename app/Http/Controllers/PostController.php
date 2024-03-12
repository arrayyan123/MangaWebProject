<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(){
        return Inertia::render('Posts/Home');
    }
    public function mangaDetail($id)
    {
        return Inertia::render('Posts/MangaDetail', [
            'mangaId' => $id,
        ]);
    }
    
}
