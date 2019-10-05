<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $users = UserResource::collection(User::orderByDesc('id')->paginate(25));
//        return response()->json(['users' => $users], 200);r
        return $users;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Bir Hata Oluştu',
                'errors' => $validator->errors(),
            ], 422);
        }
        $user = $request->only('name', 'email', 'password');
        $user['password'] = bcrypt($user['password']);
        User::create($user);
        return response()->json([
            'success' => true,
            'message' => 'Kayıt Başarılı'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
//        return User::find($id);
        $user = new UserResource(User::find($id));
        return response()->json($user, 200);
//        return response()->json(['user' => $user], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|string|email|unique:users,email,' . $user->id, //unique alanlarda virgülden sonra kolon adı belirtip id değeri verdiğimizde kayıt için unique özelliğine bakmıyor.
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Bir Hata Oluştu',
                'errors' => $validator->errors(),
            ], 422);
        }
        $user['password'] = bcrypt($request->password);
        $user->update($request->only('name', 'email', 'password'));
        return response()->json([
            'success' => true,
            'message' => 'Güncelleme Başarılı'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
