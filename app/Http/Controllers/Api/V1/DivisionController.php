<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Divisions;
use App\Http\Resources\V1\DivisionResource;

class DivisionController extends Controller
{

    public function index()
    {
        return DivisionResource::collection(Divisions::all());
    }

    public function store(Request $request)
    {
        $val=$request->validate([
            'nombre'=>'required|unique:divisions|max:45',
            'embajador'=>'required',
            'nivel'=>'required|integer|min:1',
            'cantidad'=>'required|integer|min:1',
            'colaboradores'=>'required',
        ]);

        return Divisions::create($val);
    }

    public function show($id)
    {
        return new DivisionResource(Divisions::find($id));
    }

    public function update(Request $request, $id)
    {
        $data = Divisions::find($id);

        if($data){
            $val=$request->validate([
                'nombre'=>'required|unique:divisions|max:45',
                'embajador'=>'required',
                'nivel'=>'required|integer|min:1',
                'cantidad'=>'required|integer|min:1',
                'colaboradores'=>'required',
            ]);

            return Divisions::create($val);
        }else{
            return response()->json([
                "message" => "División no encontrado."
            ]);
        }
    }

    public function destroy($id)
    {
        $data = Divisions::find($id);
        if($data){
            $data->delete();
            return response()->json([
                "message" => "Exitoso"
            ]);
        }else{
            return response()->json([
                "message" => "División no encontrado."
            ]);
        }
    }
}
