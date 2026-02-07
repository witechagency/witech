import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import { Search, Trash2, LogOut, RefreshCw } from 'lucide-react';

interface Prospect {
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
    pack: string;
    created_at: string;
}

export function ProspectsAdmin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [prospects, setProspects] = useState<Prospect[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const checkSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            setIsAuthenticated(true);
            fetchProspects();
        }
    };

    useEffect(() => {
        checkSession();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const { error: loginError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (loginError) throw loginError;

            setIsAuthenticated(true);
            fetchProspects();
        } catch (err: any) {
            console.error('Login error:', err);
            setError('Identifiants incorrects');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        setEmail('');
        setPassword('');
        setProspects([]);
    };

    const fetchProspects = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('clients')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProspects(data || []);
        } catch (err) {
            console.error('Error fetching prospects:', err);
            setError('Erreur lors du chargement des données');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;

        try {
            const { error } = await supabase
                .from('clients')
                .delete()
                .eq('id', deleteId);

            if (error) throw error;

            // Refresh the list
            fetchProspects();
            setDeleteId(null);
        } catch (err) {
            console.error('Error deleting prospect:', err);
            alert('Erreur lors de la suppression');
        }
    };

    const filteredProspects = prospects.filter(prospect =>
        prospect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prospect.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prospect.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md"
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Admin <span className="text-gradient">Wi'Tech</span>
                    </h1>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                                placeholder="votre@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-red-600 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-600/25 transition-all disabled:opacity-50"
                        >
                            {loading ? 'Connexion...' : 'Se connecter'}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Dashboard <span className="text-gradient">Prospects</span>
                    </h1>
                    <div className="flex gap-3">
                        <button
                            onClick={fetchProspects}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                        >
                            <RefreshCw size={18} />
                            Actualiser
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
                        >
                            <LogOut size={18} />
                            Déconnexion
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Rechercher par nom, email ou entreprise..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <p className="text-gray-600 text-sm mb-1">Total Prospects</p>
                        <p className="text-3xl font-bold text-gray-900">{prospects.length}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <p className="text-gray-600 text-sm mb-1">Résultats Filtrés</p>
                        <p className="text-3xl font-bold text-blue-600">{filteredProspects.length}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <p className="text-gray-600 text-sm mb-1">Aujourd'hui</p>
                        <p className="text-3xl font-bold text-purple-600">
                            {prospects.filter(p =>
                                new Date(p.created_at).toDateString() === new Date().toDateString()
                            ).length}
                        </p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    {loading ? (
                        <div className="p-12 text-center text-gray-500">
                            Chargement...
                        </div>
                    ) : filteredProspects.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            Aucun prospect trouvé
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Nom
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Entreprise
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Téléphone
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Pack
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredProspects.map((prospect, index) => (
                                        <tr key={prospect.id || index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-medium text-gray-900">{prospect.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-gray-600">{prospect.company}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <a href={`mailto:${prospect.email}`} className="text-blue-600 hover:underline">
                                                    {prospect.email}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <a href={`tel:${prospect.phone}`} className="text-gray-600 hover:text-blue-600">
                                                    {prospect.phone}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                                                    {prospect.pack}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {new Date(prospect.created_at).toLocaleDateString('fr-FR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button
                                                    onClick={() => setDeleteId(prospect.id)}
                                                    className="text-red-600 hover:text-red-800 transition-colors"
                                                    title="Supprimer"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Delete Confirmation Modal */}
                {deleteId && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirmer la suppression</h3>
                            <p className="text-gray-600 mb-6">
                                Êtes-vous sûr de vouloir supprimer ce prospect ? Cette action est irréversible.
                            </p>
                            <div className="flex gap-3 justify-end">
                                <button
                                    onClick={() => setDeleteId(null)}
                                    className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-medium"
                                >
                                    Annuler
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
