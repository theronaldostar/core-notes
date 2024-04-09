<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\NoteController;

Route::get("/user", function (Request $request) {
    return $request->user();
})->middleware("auth:sanctum");

Route::delete("/delete-note/{id}", [NoteController::class, "delete"]);
Route::get("/notes", [NoteController::class, "index"]);
Route::post("/create-note", [NoteController::class, "store"]);
Route::put("/change-note/{id}", [NoteController::class, "update"]);
