<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller {
    public function delete(string $id) {
        Note::where("id", $id)->delete();

        $notes = Note::orderBy("favorite", "DESC")->get();

        return response()->json(["status" => true, "data" => $notes], 202);
    }

    public function index() {
        $notes = Note::orderBy("favorite", "DESC")->get();

        return response()->json(["status" => true, "data" => $notes], 200);
    }

    public function store(Request $request) {
        $note = new Note;
        $note->title = $request->title;
        $note->content = $request->content;
        $note->color = $request->color;
        $note->favorite = $request->favorite;
        $note->save();

        return response()->json(["status" => true, "data" => $request->all()], 201);
    }

    public function update(Request $request, string $id) {
		$data = $request->all();
		$user = Note::findOrFail($id);
		$user->update($data);
		return response()->json(["status" => true], 200);
    }
}
