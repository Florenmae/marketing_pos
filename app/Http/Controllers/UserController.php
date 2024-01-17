<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function createUser(Request $request){
        $newUser = new User();

        $newUser->id = $request->id;
        $newUser->role = $request->role;
        $newUser->name = $request->name;
        $newUser->email = $request->email;
        $newUser->password = $request->password;

        $res = $newUser->save();

        return redirect('/user');
    }

    public function getUsers(){
        return User::all();
        }

    public function updateUser(Request $request){
        // dd($request->userPayload["name"]);
        $user = User::findOrFail($request->editingUserId);

        $user->name = $request->userPayload["name"];
        $user->email = $request->userPayload["email"];
        $user->role = $request->userPayload["role"];

        $user->save();

        return $user;
    }


    public function deleteUser(Request $request){
        // dd($request->id);
        $deleteUser = User::find($request->id);

        $res = $deleteUser->delete();
        return $res;
    }

}
