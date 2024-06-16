<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function gallery(Content $content,Request $request)/*インスタンス化している*/
    {
        $contents = Content::all();
        $sortField = $request->get('sort_field', 'name');
        $sortOrder = $request->get('sort_order', 'asc');
        $contents = Content::orderBy($sortField,$sortOrder)->get();
        return Inertia::render('Post/Gallery', [
            'contents' => $contents,
            'sortField' => $sortField,
            'sortOrder' => $sortOrder,
        ]);
    }
    //
}
